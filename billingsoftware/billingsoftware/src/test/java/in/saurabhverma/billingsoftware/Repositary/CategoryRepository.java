/*package in.saurabhverma.billingsoftware.Repositary;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import in.saurabhverma.billingsoftware.entity.CategoryEntity;

public interface CategoryRepository   extends JpaRepository<CategoryEntity, Long>{

	Optional < CategoryEntity>findByCategoryId( String CategoryId);

	
	}
	
}*/






package in.saurabhverma.billingsoftware.Repositary;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import in.saurabhverma.billingsoftware.entity.CategoryEntity;

public interface CategoryRepository extends JpaRepository<CategoryEntity, Long> {

    Optional<CategoryEntity> findByCategoryId(String categoryId);
}