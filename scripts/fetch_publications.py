import requests
from bs4 import BeautifulSoup

# URL of the professor's publications page
url = 'https://mi-zhang.github.io/publication.html'

response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser') 

for publication in soup.select('li:has(> .pubEntry)'):
    title_div = publication.select_one('.pubTitle')
    if title_div:
        title = title_div.text.strip()
        authors = publication.text.split('\n')[1].strip() 
        paper_link_element = publication.select_one('a[href$=".pdf"]') 
        paper_link = paper_link_element['href'] if paper_link_element else 'No link available'
        bibtex_link_element = publication.select_one('a[href*=".bib"]')
        if bibtex_link_element:
            bibtex_link = bibtex_link_element['href']
            print(f"BibTeX link: {bibtex_link}")
            response = requests.get(bibtex_link)
            if response.status_code == 200:
                print(response.text)
            else:
                print(f"Error fetching BibTeX from {bibtex_link}: Status code {response.status_code}")
        else:
            bibtex_link = None
            print("BibTeX link not found for this publication.")


        bibtex_var_name = title.replace(' ', '').replace(':', '').replace('-', '') 

        react_component = f"""
            <div className='publicationsPreprintContent'>
                <CodeBlock
                    title = "{title}"
                    authors = "{authors}"
                    paper = "{paper_link}"
                    bibtex = {{{bibtex_var_name}}}
                >
                </CodeBlock>
            </div>
            """
        print(react_component)
        print('\n')