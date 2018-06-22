# Preparing the Database

Do the following as root

```sql
 create database shopdb2;
 create user shopper2 identified by 'Shoppass 1';
 use shopdb2;
 grant all privileges on shopdb2 to shopper2;
 grant all privileges on shopdb2.* to shopper2;
```
