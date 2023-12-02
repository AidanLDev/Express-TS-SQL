CREATE PROCEDURE [Product].[GetByName]
    @ProductName NVARCHAR(255)
AS
BEGIN
    SELECT
        *
    FROM dbo.Products (NOLOCK)
    WHERE ProductName = @ProductName
END
GO
