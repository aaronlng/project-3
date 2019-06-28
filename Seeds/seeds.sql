SELECT * FROM bandly.members;

		INSERT INTO members (fullName,bio,genres,experience,email,createdAt,updatedAt)
		VALUES ("kevin wang","asdf","classic","none","@",0,0);
		INSERT INTO members (fullName,bio,genres,experience,email, createdAt,updatedAt)
		VALUES ("bird what","lkjh","classic","none","@",0,0);
	SELECT * FROM bandly.members;

INSERT INTO bands (bandName, bio, genres, email,createdAt,updatedAt)
VALUES ("flock", "somebio","jazz","123@3",0,0);


INSERT INTO chatrooms (createdAt, updatedAt)
VALUES (0,0);

UPDATE chatrooms
SET bandId = 1
WHERE id =1 ;

SELECT * FROM chatrooms;

SELECT * FROM bandly.bands;
SELECT * FROM bandly.messages;
