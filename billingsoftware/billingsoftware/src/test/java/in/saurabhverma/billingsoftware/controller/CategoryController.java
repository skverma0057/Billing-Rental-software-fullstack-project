










/*package in.saurabhverma.billingsoftware.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import in.saurabhverma.billingsoftware.Service.CategoryService;
import in.saurabhverma.billingsoftware.io.CategoryRequest;
import in.saurabhverma.billingsoftware.io.CategoryResponse;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/categories")
@CrossOrigin(origins = "http://localhost:5177")
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryService categoryservice;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CategoryResponse addCatagory(@RequestBody CategoryRequest request) {

        return categoryservice.addCatagory(request);
    }

    @GetMapping
    public List<CategoryResponse> fetchCategory() {

        return categoryservice.readCategory();
    }

    @DeleteMapping("/{categoryId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void remove(@PathVariable String categoryId) {

        try {

            categoryservice.deleteCategory(categoryId);

        } catch (Exception e) {

            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND,
                    "Category not found: " + categoryId
            );
        }
    }
}*/













/*package in.saurabhverma.billingsoftware.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import in.saurabhverma.billingsoftware.Service.CategoryService;
import in.saurabhverma.billingsoftware.io.CategoryRequest;
import in.saurabhverma.billingsoftware.io.CategoryResponse;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/categories")
@RequiredArgsConstructor
@CrossOrigin(origins = {
        "http://localhost:5173",
        "http://localhost:5174",
        "http://localhost:5175",
        "http://localhost:5176",
        "http://localhost:5177"
})
public class CategoryController {

    private final CategoryService categoryservice;

   /* @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CategoryResponse addCategory(
            @RequestParam("name") String name,
            @RequestParam("description") String description,
            @RequestParam("bgColor") String bgColor,
            @RequestPart(value = "image", required = false) MultipartFile image) {

        CategoryRequest request = new CategoryRequest();

        request.setName(name);
        request.setDescription(description);
        request.setBgColor(bgColor);

        return categoryservice.addCatagory(request);
    }*/
    
   
//    @PostMapping
//    @ResponseStatus(HttpStatus.CREATED)
//    public CategoryResponse addCategory(
//            @RequestParam("name") String name,
//            @RequestParam("description") String description,
//            @RequestParam("bgColor") String bgColor,
//            @RequestPart(value = "image", required = false) MultipartFile image) {
//
//        CategoryRequest request = new CategoryRequest();
//
//        request.setName(name);
//        request.setDescription(description);
//        request.setBgColor(bgColor);
//
//        return categoryservice.addCatagory(request);
//    }
//   
//
//
//    @GetMapping
//    public List<CategoryResponse> fetchCategory() {
//        return categoryservice.readCategory();
//    }
//
//    @DeleteMapping("/{categoryId}")
//    @ResponseStatus(HttpStatus.NO_CONTENT)
//    public void remove(@PathVariable String categoryId) {
//
//        try {
//            categoryservice.deleteCategory(categoryId);
//
//        } catch (Exception e) {
//
//            throw new ResponseStatusException(
//                    HttpStatus.NOT_FOUND,
//                    "Category not found: " + categoryId
//            );
//        }
//    }
//}*/

















package in.saurabhverma.billingsoftware.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import in.saurabhverma.billingsoftware.Service.CategoryService;
import in.saurabhverma.billingsoftware.io.CategoryRequest;
import in.saurabhverma.billingsoftware.io.CategoryResponse;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/categories")
@CrossOrigin(origins = "http://localhost:5173")
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryService categoryService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CategoryResponse addCategory(
            @RequestParam("name") String name,
            @RequestParam("description") String description,
            @RequestParam("bgColor") String bgColor,
            @RequestPart(value = "image", required = false) MultipartFile image) {

        CategoryRequest request = new CategoryRequest();

        request.setName(name);
        request.setDescription(description);
        request.setBgColor(bgColor);

        return categoryService.addCategory(request, image);
    }

    @GetMapping
    public List<CategoryResponse> fetchCategory() {
        return categoryService.readCategory();
    }

   
    
    @DeleteMapping("/{categoryId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void remove(@PathVariable String categoryId) {
        categoryService.deleteCategory(categoryId);
    }
}







