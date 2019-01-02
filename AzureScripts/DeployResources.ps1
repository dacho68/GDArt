
Param(
    [string]
    $subscriptionName = "Visual Studio Professional with MSDN",
    [string]
    $resourceGroupName = "gdArtGroup",
    [string]
    $location = "East Us",
    [string]
    $blobStorageAccount = "gdartstorageacc"
)

Set-Location $PSScriptRoot
az login --subscription $subscriptionName
az group create -l $location -n $resourceGroupName
az appservice plan create -g $resourceGroupName -n "gdArtPlan" -l $location --number-of-workers 2 --sku SHARED  --subscription $subscriptionName

az storage account create -g $resourceGroupName -n $storageAcc -Location $location --sku Standard_LRS --kind BlobStorage --access-tier Hot

$blobStorageAccount="gdartstorageacc"

$blobStorageAccountKey=$(az storage account keys list -g $resourceGroupName --account-name $blobStorageAccount --query [0].value --output tsv)
az storage container create -n images --account-name $blobStorageAccount --account-key $blobStorageAccountKey --public-access off
az storage container create -n thumbnails --account-name $blobStorageAccount --account-key $blobStorageAccountKey --public-access container
az webapp config appsettings set --name gdart -g $resourceGroupName  --settings AzureStorageConfig__AccountName=$blobStorageAccount AzureStorageConfig__ImageContainer=images AzureStorageConfig__ThumbnailContainer=thumbnails AzureStorageConfig__AccountKey=$blobStorageAccountKey  