Study "Securing DevOps Show & Tell: Mozilla Sops" [https://www.youtube.com/watch?v=V2PRhxphH2w](https://www.youtube.com/watch?v=V2PRhxphH2w)

Basic PGP [https://encryptionconsulting.com/how-to-generate-pgp-key-pair/](https://encryptionconsulting.com/how-to-generate-pgp-key-pair/)

[https://jooooel.com/gitops-encrypting-secrets-with-mozilla-sops/](https://jooooel.com/gitops-encrypting-secrets-with-mozilla-sops/)

## Installation

```bash
brew install gpg
brew install sops
brew install age
```

### GPG (Gnu PG)

```bash
$ gpg --full-generate-key

gpg (GnuPG) 2.3.4; Copyright (C) 2021 Free Software Foundation, Inc.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Please select what kind of key you want:
   (1) RSA and RSA
   (2) DSA and Elgamal
   (3) DSA (sign only)
   (4) RSA (sign only)
   (9) ECC (sign and encrypt) *default*
  (10) ECC (sign only)
  (14) Existing key from card
Your selection? 1
RSA keys may be between 1024 and 4096 bits long.
What keysize do you want? (3072) 
Requested keysize is 3072 bits
Please specify how long the key should be valid.
         0 = key does not expire
      <n>  = key expires in n days
      <n>w = key expires in n weeks
      <n>m = key expires in n months
      <n>y = key expires in n years
Key is valid for? (0) 
Key does not expire at all
Is this correct? (y/N) y

GnuPG needs to construct a user ID to identify your key.

Real name: Thada
Email address: thada.wth@gmail.com
Comment: Here is my first pgp key
You selected this USER-ID:
    "Thada (Here is my first pgp key) <thada.wth@gmail.com>"

Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O
We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.
We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.
gpg: directory '/Users/thadawangthammang/.gnupg/openpgp-revocs.d' created
gpg: revocation certificate stored as '/Users/thadawangthammang/.gnupg/openpgp-revocs.d/490E7C015B06D25C0B0F843CDC35657AB6859683.rev'
public and secret key created and signed.

pub   rsa3072 2022-04-07 [SC]
      490E7C015B06D25C0B0F843CDC35657AB6859683
uid                      Thada (Here is my first pgp key) <thada.wth@gmail.com>
sub   rsa3072 2022-04-07 [E]
```

```bash
$ gpg --export -a 490E7C015B06D25C0B0F843CDC35657AB6859683 > my_public.key
$ gpg --export-secret-keys -a 490E7C015B06D25C0B0F843CDC35657AB6859683 > my_private.key
$ ls
my_private.key my_public.key
```

```bash
$ gpg --fingerprint thada.wth@gmail.com

pub   rsa3072 2022-04-07 [SC]
      490E 7C01 5B06 D25C 0B0F  843C DC35 657A B685 9683
uid           [ultimate] Thada (Here is my first pgp key) <thada.wth@gmail.com>
sub   rsa3072 2022-04-07 [E]
```

```bash
$ echo 490E 7C01 5B06 D25C 0B0F  843C DC35 657A B685 9683 | tr -d '[:space:]'
490E7C015B06D25C0B0F843CDC35657AB6859683

$ sops -pgp 490E7C015B06D25C0B0F843CDC35657AB6859683 pgpfile.yaml

# Add `foo:bar` in that pgpfile.yaml
# sops will add some keys in that 

$ cat pgpfile.yaml
```

```yaml
foo: ENC[AES256_GCM,data:7jBY,iv:LAVNTqpYXgxIXARggO73VeUnacvE5JJv1/nXl35XJ4s=,tag:pN+0CFHrlNcJaHg2DPb9uA==,type:str]
sops:
    kms: []
    gcp_kms: []
    azure_kv: []
    hc_vault: []
    age: []
    lastmodified: "2022-04-07T07:43:07Z"
    mac: ENC[AES256_GCM,data:45T9UbQkU1ejZGQRveLzcTPifrxkfN76jQAn3W3uDz2wF0sFKIdgX9M5GtsyvshNtZb0VJWjHhtnmCCSbeT7HQ6kQrT2HXW61jZjd1/4xHHgPJO7crRrlKcHmshjppfuszlYGXq2AKR2YLqKNsQ2MQDnh/ZPAI3p5Rf35yO/5wY=,iv:AvIRbzxeaYFs60oZ9tNvdci29KkszeNMjiPzefck8+E=,tag:CfUr7saDkZFfV8Mor4JIqg==,type:str]
    pgp:
        - created_at: "2022-04-07T07:42:29Z"
          enc: |
            -----BEGIN PGP MESSAGE-----

            hQGMA1OCQpfgaj5HAQv/fL0iDW53Z3EySz/WadJ3q61X+59zQmCtR4C7GSUwkj1/
            tiJR2Q2pQPaEp2M/GCfeppPekBKcCjD4sKGT+pU5aIisC0pH4FuycsgUFiWGRN46
            wKbKy7pmHIY5cGVf5XL8qQfmQMxR8uglC4ts3+SBjrn7L7qWVlOQgFDUx7ejhY5A
            znlWI9yDpJ+DtGpkwvdiDvjeyjdh79wyoM2yDtTlatwN3EU8dQxiGfnZEMosiqgR
            eBw8jIe51VxHv4uxUPT81jbxrJOGKbr4q8nogl9U/C/nk/fOFcobrocpDqnqesJw
            Tym/1vxqyvWq71zzvNnzDXmJIRqwrLN5J4VVtJgeZoZt/G6blDcPHeJhgk1t4WE7
            Ap5G9sMa9QqBSCcw9SSvF6KGNhRUimLAQYx+s+Di+u+YWIlky6sFJLHI+I+i/luq
            QZVqkU9cL1/GQSmuzOGq08JEu+RRuO2kH4c+7j3FYtwSxY5Zw2Zl305QzbbdMy6j
            4V95rL0o9mymHsPqG1/J1GYBCQIQeSIsoeZ8gXe5rwstB0RE6xLmjTui+FqZs6Yz
            8UmmcQv1CwJr2ZznRupgLVL1LWZcp2XlebuIuLb5jR0tm3WN+6Lp7u/JvpjKtJj6
            At5aYwKe31ncB6a9EG1pl9ZnS+/6G2U=
            =cx1M
            -----END PGP MESSAGE-----
          fp: 490E7C015B06D25C0B0F843CDC35657AB6859683
    unencrypted_suffix: _unencrypted
    version: 3.7.2
```

SOPS

```bash
vim .sops.yaml
sops example.yml
cat example.yml
```

```yaml
creation_rules:
    - pgp: '490E7C015B06D25C0B0F843CDC35657AB6859683'
```