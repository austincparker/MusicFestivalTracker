USE MASTER
GO

IF NOT EXISTS (
	SELECT [name]
	FROM sys.databases
	WHERE [name] = 'MusicFestivalTracker'
)
CREATE DATABASE MusicFestivalTracker
GO

USE MusicFestivalTracker
GO

DROP TABLE IF EXISTS [User];
DROP TABLE IF EXISTS Festival;


CREATE TABLE [User] (
id int not null identity primary key,
fullName varchar (255) not null,
firebaseKey varchar (255) not null,
);

CREATE TABLE Festival (
	id int not null identity primary key,
	[name] varchar (255),
	headliner varchar (255),
	[location] varchar (255),
	[date] varchar (255),
	liked varchar (255),
	lacked varchar (255),
	camping bit,
	userId int,
	imageUrl varchar (800),
);

SET IDENTITY_INSERT [User] ON

INSERT INTO [User] (id, fullName, firebaseKey)
VALUES (1, 'Wally Beard', '3ar340983j')

INSERT INTO [User] (id, fullName, firebaseKey)
VALUES (2, 'Mice Lodana', '7eoiuwe09')

INSERT INTO [User] (id, fullName, firebaseKey)
VALUES (3, 'Tonya Tina', 'p37623kjhd')

SET IDENTITY_INSERT [User] OFF
SET IDENTITY_INSERT Festival ON

INSERT INTO Festival (id, [name], headliner, [location], [date], liked, lacked, camping, userId, imageUrl)
	VALUES (100, 'Bonnaroo', 'Radiohead & RHCP', 'Manchester, TN', '06/09/2012', 'Our whole friend group made it.', 'It was crazy hot.', 1, 1, 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940')

INSERT INTO Festival (id, [name], headliner, [location], [date], liked, lacked, camping, userId, imageUrl)
	VALUES (101, 'Hangout Fest','Outkast', 'Golf Shores, AL', '05/22/2013', 'Outkast was good.', 'The people sucked.', 0, 2, 'https://images.unsplash.com/photo-1544509807-aabbcf9c5cba?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2849')

INSERT INTO Festival (id, [name], headliner, [location], [date], liked, lacked, camping, userId, imageUrl)
	VALUES (102, 'Coachella', 'William Eyelash', 'Chicago, IL', '05/10/2021', 'Spent a lot of money.', 'The people sucked, and it was crazy hot.', 1, 2, 'https://images.unsplash.com/photo-1543423924-b9f161af87e4?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787')

SET IDENTITY_INSERT Festival OFF

select * from [User]
select * from Festival