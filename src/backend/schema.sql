-- Users Table
CREATE TABLE Users (
    Username VARCHAR(255) PRIMARY KEY,  -- Using Username as the natural primary key
    Email VARCHAR(255) NOT NULL UNIQUE,
    PasswordHash VARCHAR(255) NOT NULL,
    CreatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Polls Table
CREATE TABLE Polls (
    PollID INT PRIMARY KEY,  -- Keeping PollID as a surrogate key due to potential complexity of poll titles
    CreatedBy VARCHAR(255) NOT NULL,
    Title VARCHAR(255) NOT NULL,
    Description TEXT,
    CreatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    EndTime TIMESTAMP,
    FOREIGN KEY (CreatedBy) REFERENCES Users(Username)
);

-- Choices Table
CREATE TABLE Choices (
    ChoiceID INT PRIMARY KEY,  -- Keeping ChoiceID as a surrogate key as choice text can be long and non-unique
    PollID INT NOT NULL,
    Text VARCHAR(255) NOT NULL,
    FOREIGN KEY (PollID) REFERENCES Polls(PollID)
);

-- Votes Table
CREATE TABLE Votes (
    Username VARCHAR(255) NOT NULL,
    PollID INT NOT NULL,
    ChoiceID INT NOT NULL,
    Timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (Username, PollID),  -- Composite key of Username and PollID
    FOREIGN KEY (PollID) REFERENCES Polls(PollID),
    FOREIGN KEY (ChoiceID) REFERENCES Choices(ChoiceID),
    FOREIGN KEY (Username) REFERENCES Users(Username)
);
