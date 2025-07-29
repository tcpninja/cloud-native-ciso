---
title: "Kubernetes Security Basics"
description: "Step-by-step guide for securing Kubernetes clusters."
excerpt: "Step-by-step guide for securing Kubernetes clusters."
slug: "example-slug"
publishDate: "2024-11-01"
# image: "/assets/images/playbooks/k8s-security.jpg"
publish: true
link: "/playbook/kubernetes-security-basics"
---

```python
# Example 1: mail merger
# Names are in the file names.txt
# Body of the mail is in body.txt

# open names.txt for reading
with open("01_names.txt", 'r', encoding='utf-8') as names_file:

    # open body.txt for reading
    with open("02_body.txt", 'r', encoding='utf-8') as body_file:

        # read entire content of the body
        body = body_file.read()

        # iterate over names
        for name in names_file:
            mail = "Dear Mr./Ms. " + name.strip() + "," + "\n\n" + body

            # write the mails to individual files
            with open(name.strip()+".txt", 'w', encoding='utf-8') as mail_file:
                mail_file.write(mail)