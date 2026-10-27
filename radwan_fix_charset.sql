-- Step 1: Fix charset on blog_details columns
ALTER TABLE blog_details 
  CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Step 2: Fix charset on blogs table too
ALTER TABLE blogs 
  CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Step 3: Fix charset on blog_categories table
ALTER TABLE blog_categories 
  CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
