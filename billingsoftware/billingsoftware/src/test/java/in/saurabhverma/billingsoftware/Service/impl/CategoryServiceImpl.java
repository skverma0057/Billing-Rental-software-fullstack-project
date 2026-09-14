





//
//
// /*package in.saurabhverma.billingsoftware.Service.impl;
//
//import java.util.List;
//import java.util.UUID;
//import java.util.stream.Collectors;
//
//import org.springframework.stereotype.Service;
//
//import in.saurabhverma.billingsoftware.Repositary.CategoryRepository;
//import in.saurabhverma.billingsoftware.Service.CategoryService;
//import in.saurabhverma.billingsoftware.entity.CategoryEntity;
//
//import in.saurabhverma.billingsoftware.io.CategoryRequest;
//import in.saurabhverma.billingsoftware.io.CategoryResponse;
//import lombok.RequiredArgsConstructor;
//
//
//@Service
//@RequiredArgsConstructor
//public class CategoryServiceImpl implements CategoryService {
//
//    private final CategoryRepository categoryRepository;
//
//    @Override
//    public CategoryResponse addCatagory(CategoryRequest request) {
//
//        // Request → Entity
//        CategoryEntity newCategory = convertToEntity(request);
//
//        // Save entity into database
//        newCategory = categoryRepository.save(newCategory);
//
//        // Entity → Response
//        return convertToResponse(newCategory);
//    }
//
//    
//    @Override
//	public List<CategoryResponse> readCategory() {
//	    return categoryRepository.findAll()
//	            .stream()
//	            .map(categoryEntity -> convertToResponse(categoryEntity))
//	            .collect(Collectors.toList());
//	}
//    
//	
//	
//	@Override
//	public void deleteCategory(String categoryId) {
//
//	    CategoryEntity existingCategory = categoryRepository
//	            .findByCategoryId(categoryId)
//	            .orElseThrow(() -> new RuntimeException("Category not found: " + categoryId));
//
//	    categoryRepository.delete(existingCategory);
//	}
//    
//    
//    private CategoryResponse convertToResponse(CategoryEntity newCategory) {
//
//        return CategoryResponse.builder()
//                .categoryid(newCategory.getCategoryId())
//                .name(newCategory.getName())
//                .description(newCategory.getDescription())
//                .bgcolor(newCategory.getBgColor())
//                .imgUrl(newCategory.getImgUrl())
//                .createat(newCategory.getCreatedAt())
//                .updateat(newCategory.getUpdatedAt())
//                
//                .build();
//    }
//
//    private CategoryEntity convertToEntity(CategoryRequest request) {
//
//        return CategoryEntity.builder()
//                .categoryid(UUID.randomUUID().toString())
//                .name(request.getName())
//               .description(request.getDescription())
//                .bgcolor(request.getBgcolor())
//                .build();
//    } 
//   
//}*/
//
//
//
//
//
//
//
//
//
////package in.saurabhverma.billingsoftware.Service.impl;
//
//import java.util.List;
//import java.util.UUID;
//import java.util.stream.Collectors;
//
//import org.springframework.stereotype.Service;
//
//import in.saurabhverma.billingsoftware.Repositary.CategoryRepository;
//import in.saurabhverma.billingsoftware.Service.CategoryService;
//import in.saurabhverma.billingsoftware.entity.CategoryEntity;
//import in.saurabhverma.billingsoftware.io.CategoryRequest;
//import in.saurabhverma.billingsoftware.io.CategoryResponse;
//import lombok.RequiredArgsConstructor;
//
//@Service
//@RequiredArgsConstructor
//public class CategoryServiceImpl implements CategoryService {
//
//    private final CategoryRepository categoryRepository;
//
//    @Override
//    public CategoryResponse addCatagory(CategoryRequest request) {
//
//        // Request → Entity
//        CategoryEntity newCategory = convertToEntity(request);
//
//        // Save entity into database
//        newCategory = categoryRepository.save(newCategory);
//
//        // Entity → Response
//        return convertToResponse(newCategory);
//    }
//
//    @Override
//    public List<CategoryResponse> readCategory() {
//
//        return categoryRepository.findAll()
//                .stream()
//                .map(categoryEntity -> convertToResponse(categoryEntity))
//                .collect(Collectors.toList());
//    }
//
//    @Override
//    public void deleteCategory(String categoryId) {
//
//        CategoryEntity existingCategory = categoryRepository
//                .findByCategoryId(categoryId)
//                .orElseThrow(() ->
//                        new RuntimeException("Category not found: " + categoryId));
//
//        categoryRepository.delete(existingCategory);
//    }
//
//    private CategoryResponse convertToResponse(CategoryEntity newCategory) {
//
//        return CategoryResponse.builder()
//                .categoryid(newCategory.getCategoryId())
//                .name(newCategory.getName())
//                .description(newCategory.getDescription())
//                .bgcolor(newCategory.getBgColor())
//                .imgUrl(newCategory.getImgUrl())
//                .createat(newCategory.getCreatedAt())
//                .updateat(newCategory.getUpdatedAt())
//                .build();
//    }
//
//    private CategoryEntity convertToEntity(CategoryRequest request) {
//
//        return CategoryEntity.builder()
//                .CategoryId(UUID.randomUUID().toString())
//                .name(request.getName())
//                .description(request.getDescription())
//                .BgColor(request.getBgColor())
//                .build();
//    }
//}*/













































package in.saurabhverma.billingsoftware.Service.impl;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import in.saurabhverma.billingsoftware.Repositary.CategoryRepository;
import in.saurabhverma.billingsoftware.Service.CategoryService;
import in.saurabhverma.billingsoftware.entity.CategoryEntity;
import in.saurabhverma.billingsoftware.io.CategoryRequest;
import in.saurabhverma.billingsoftware.io.CategoryResponse;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;

    private static final String UPLOAD_DIR = "uploads/categories";

    // ADD CATEGORY
    @Override
    public CategoryResponse addCategory(
            CategoryRequest request,
            MultipartFile image) {

        // Request -> Entity
        CategoryEntity newCategory = convertToEntity(request);

        // Save image
        if (image != null && !image.isEmpty()) {

            String imageUrl = saveImage(image);

            newCategory.setImgUrl(imageUrl);
        }

        // Save category in database
        newCategory = categoryRepository.save(newCategory);

        // Entity -> Response
        return convertToResponse(newCategory);
    }

    // GET ALL CATEGORIES
    @Override
    public List<CategoryResponse> readCategory() {

        return categoryRepository.findAll()
                .stream()
                .map(this::convertToResponse)
                .collect(Collectors.toList());
    }

    // DELETE CATEGORY
    @Override
    public void deleteCategory(String categoryId) {

        CategoryEntity existingCategory = categoryRepository
                .findByCategoryId(categoryId)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Category not found: " + categoryId));

        // Delete image from uploads folder
        deleteImage(existingCategory.getImgUrl());

        // Delete category from database
        categoryRepository.delete(existingCategory);
    }

    // ENTITY -> RESPONSE
    private CategoryResponse convertToResponse(
            CategoryEntity category) {

        return CategoryResponse.builder()
                .categoryId(category.getCategoryId())
                .name(category.getName())
                .description(category.getDescription())
                .bgColor(category.getBgColor())
                .imgUrl(category.getImgUrl())
                .createdAt(category.getCreatedAt())
                .updatedAt(category.getUpdatedAt())
                .build();
    }

    // REQUEST -> ENTITY
    private CategoryEntity convertToEntity(
            CategoryRequest request) {

        return CategoryEntity.builder()
                .categoryId(UUID.randomUUID().toString())
                .name(request.getName())
                .description(request.getDescription())
                .bgColor(request.getBgColor())
                .build();
    }

    // SAVE IMAGE
    private String saveImage(MultipartFile image) {

        try {

            // Create uploads/categories folder
            Path uploadPath = Paths.get(UPLOAD_DIR);

            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }

            // Get original file name
            String originalFilename = image.getOriginalFilename();

            String extension = "";

            if (originalFilename != null
                    && originalFilename.contains(".")) {

                extension = originalFilename.substring(
                        originalFilename.lastIndexOf("."));
            }

            // Generate unique file name
            String fileName =
                    UUID.randomUUID() + extension;

            // Complete file path
            Path filePath =
                    uploadPath.resolve(fileName);

            // Copy uploaded image to folder
            Files.copy(
                    image.getInputStream(),
                    filePath);

            // URL that React can use
            return "http://localhost:8000/api/uploads/categories/"
                    + fileName;

        } catch (IOException e) {

            throw new RuntimeException(
                    "Failed to save image", e);
        }
    }

    // DELETE IMAGE
    private void deleteImage(String imageUrl) {

        // No image
        if (imageUrl == null || imageUrl.isBlank()) {
            return;
        }

        try {

            // Get file name from URL
            String fileName =
                    imageUrl.substring(
                            imageUrl.lastIndexOf("/") + 1);

            // Find file inside uploads/categories
            Path filePath =
                    Paths.get(UPLOAD_DIR)
                            .resolve(fileName);

            // Delete image
            Files.deleteIfExists(filePath);

        } catch (Exception e) {

            System.out.println(
                    "Could not delete image: "
                            + e.getMessage());
        }
    }
}
