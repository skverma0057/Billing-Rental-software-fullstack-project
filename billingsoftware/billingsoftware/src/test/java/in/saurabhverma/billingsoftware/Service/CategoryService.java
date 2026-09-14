/*package in.saurabhverma.billingsoftware.Service;

import java.util.List;

import in.saurabhverma.billingsoftware.io.CategoryRequest;
import in.saurabhverma.billingsoftware.io.CategoryResponse;


public interface CategoryService {

	
	CategoryResponse addCatagory(CategoryRequest request);
	
	
	
	 List<CategoryResponse>readCategory();
	 
	 void deleteCategory(String CategoryId);;
}
*/







package in.saurabhverma.billingsoftware.Service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import in.saurabhverma.billingsoftware.io.CategoryRequest;
import in.saurabhverma.billingsoftware.io.CategoryResponse;

public interface CategoryService {

    CategoryResponse addCategory(CategoryRequest request, MultipartFile image);

    List<CategoryResponse> readCategory();

    void deleteCategory(String categoryId);
}