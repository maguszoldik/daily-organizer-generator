About
====
This project aims to generate a PDF file to be used as my daily organizer and note-taking on an e-book tablet,
through a given year.

It does just what I need, without extra:
- Perfectly fit for a Boox Note Air 2
- All in my language
- Year calendar with country holidays
- Quarters with country holidays
- One page per day split into sections
    - top priorities (3 todos)
    - other todos (10)
    - short notes space
    - timeline
    - an empty space for whatever I want
- 3 pages of notes summary (90 per page)
- 270 pages of notes
- hyperlink all pages together through graphical tabs, dates click and notes numbers click
- use a free to use and distribute sketchy font
- Bonus: Table of Contents

It is made for French out of the box, with France holidays in the calendar parts.
[See the generated file for year 2025](dist/Agenda&Notes%202025.pdf).

Translation is in limited support for now, your contribution is welcomed to improve that.  
[An english result there, still with French Holidays](dist/Diary&Notes%202025.pdf)

How to use
====
Requirements
----
You need a properly configured [NVM](https://github.com/nvm-sh/nvm) or at least a node.js instance.  
See [.nvmrc](.nvmrc) for current version.

Like all other npm projects, simply run `nvm use && npm ci` to install dependencies.

Generate the PDF file
----
Set the correct version of node with `nvm use` if not already done. Then,

```
npm run generate
```
The result will be saved to `dist/{filename}.pdf`, with `filename` generated from the translation module.

Contribute
====
Any contribution is welcome.

This project install [Prettier](https://prettier.io) as a dev-dependency.  
Please make sure you run it against modified files before submitting a PR.

License
====
This project is made open source under the [GNU General Public License v3.0](LICENSE).

In short, permissions of this strong copyleft license are conditioned on making available complete source code
of licensed works and modifications, which include larger works using a licensed work, under the same license.
Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.  
[Read more on that license](https://choosealicense.com/licenses/gpl-3.0/)