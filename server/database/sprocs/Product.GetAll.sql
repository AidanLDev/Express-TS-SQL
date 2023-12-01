CREATE PROCEDURE [Product].[GetAll]
AS
BEGIN
    SELECT TOP 5000
        *
    FROM Products (NOLOCK)
END
GO
