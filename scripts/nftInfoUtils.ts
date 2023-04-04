import fs from 'fs';

export function updateNftInfo(key: string, value: any, filePath: string = "../assets/nft-info.json") {
    // Parse the JSON data into an object
    const json = readNftInfo(filePath)

    // Update or append the key to the JSON object
    json[key] = value;

    // Convert the object back into a JSON string
    const updatedJsonString = JSON.stringify(json, null, 2);

    // Write the updated JSON string back to the file
    fs.writeFileSync(filePath, updatedJsonString, 'utf-8');

    console.log(`Updated file [${filePath}], {${key}: ${value}`)
}

export function readNftInfo(filePath: string = "../assets/nft-info.json") {
    // Read the existing JSON file
    const data = fs.readFileSync(filePath, 'utf-8');

    // Parse the JSON data into an object
    return JSON.parse(data);
}