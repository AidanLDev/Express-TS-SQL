CREATE PROCEDURE [Product].[DeleteProductById]
    @ProductId BIGINT
AS
BEGIN
DELETE FROM dbo.Products
WHERE Id = @ProductId
END
GO