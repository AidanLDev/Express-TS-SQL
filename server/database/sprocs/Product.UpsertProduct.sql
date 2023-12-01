CREATE PROCEDURE [Product].[UpsertProduct]
    @ProductName NVARCHAR(255),
    @Price DECIMAL(10,2),
    @Quantity INT
AS
BEGIN
    INSERT INTO dbo.Products
    (
        Price,
        ProductName,
        Quantity
    )
    VALUES
    (
        @Price,
        @ProductName,
        @Quantity
    )
END
GO
