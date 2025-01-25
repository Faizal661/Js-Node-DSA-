Rename collection
    db.users.renameCollection("customers")


$rename field in 
    db.users.updateMany(
        {}, // Matches all documents
        { $rename: { "email": "contact_email" } }
    );


Remove field
    db.collection.updateOne(
        { <query> },
        { $unset: { <field>: "" } }
    );


$fill in MongoDB is an aggregation pipeline operator that fills in missing fields with the specified value. It's commonly used to handle missing data or to ensure that all documents in a collection have the same set of fields.

Syntax:
    {
    $fill: {
        field1: value_for_field1,
        field2: value_for_field2
    }
    }


TTL in mongodb 
    db.collection.createIndex({ field: 1 }, { expireAfterSeconds: 3600 })


Capped Collection 
    db.createCollection("log_messages", { capped: true, size: 1024000 })


mongodump is a command-line utility used to create a backup of a MongoDB database. It exports the data in a binary format that can be restored later using the mongorestore command.
    mongodump --uri "mongodb://localhost:27017" --db test --out /backups



Unwind in MongoDB
    db.collection.aggregate([
        {
            $unwind: "$interests"
        }
    ])


$pop operator in MongoDB
    db.tasks.updateMany(
        { name: "Project A" },
        { $pop: { tasks: 1 } } // Removes the last element
    )




$lookup in MongoDB 
    {
    $lookup: {
        from: "<foreignCollection>",
        localField: "<localField>",
        foreignField: "<foreignField>",
        as: "<outputArray>"
    }
    }


$facet
    db.products.aggregate([
    {
        $facet: {
        totalProducts: [ { $count: "count" } ],
        averagePrice: [ { $group: { _id: null, avgPrice: { $avg: "$price" } } } ],
        productsByCategory: [ { $group: { _id: "$category", total: { $sum: 1 } } } ]
        }
    }
    ]);


bulkWrite 
db.products.bulkWrite([
  // Insert a new product
  { insertOne: { document: { name: "Laptop", category: "Electronics", price: 1000 } } },

  // Update the price of a product
  { updateOne: { 
      filter: { name: "Laptop" }, 
      update: { $set: { price: 1200 } } 
    }
  },

  // Delete a product
  { deleteOne: { filter: { name: "Old Phone" } } }
]);



