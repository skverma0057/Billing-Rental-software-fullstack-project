/*package in.saurabhverma.billingsoftware.entity;


import java.sql.Timestamp;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "tbl_category")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class CategoryEntity {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private long id;

	    @Column(unique = true)
	    private String  CategoryId ;

	    @Column(unique = true)
	    private String name;

	    private String description;

	    private String  BgColor;

	    private String imgUrl;

	    @CreationTimestamp
	    @Column(updatable = false)
	    private Timestamp   CreatedAt;

	    @UpdateTimestamp
	    private Timestamp UpdatedAt;

		
}*/





















package in.saurabhverma.billingsoftware.entity;

import java.sql.Timestamp;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "tbl_category")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CategoryEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "category_id", unique = true, nullable = false)
    private String categoryId;

    @Column(unique = true, nullable = false)
    private String name;

    private String description;

    @Column(name = "bg_color")
    private String bgColor;

    private String imgUrl;

    @CreationTimestamp
    @Column(updatable = false)
    private Timestamp createdAt;

    @UpdateTimestamp
    private Timestamp updatedAt;
}
