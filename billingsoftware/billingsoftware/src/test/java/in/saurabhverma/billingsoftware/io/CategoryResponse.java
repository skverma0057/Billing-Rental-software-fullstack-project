/*package in.saurabhverma.billingsoftware.io;


import java.sql.Timestamp;

import lombok.Builder;
import lombok.Data;

@Builder
@Data

public class CategoryResponse {
	  private String categoryid;


	    private String name;

	    private String description;

	    private String bgcolor;

	    private String imgUrl;

	
	    private Timestamp createat;

	   
	    private Timestamp updateat;
}
*/




package in.saurabhverma.billingsoftware.io;

import java.sql.Timestamp;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CategoryResponse {

    private String categoryId;

    private String name;

    private String description;

    private String bgColor;

    private String imgUrl;

    private Timestamp createdAt;

    private Timestamp updatedAt;
}
