# Makefile — Deutsch lernen in Mannheim
# Build: PDF (KDP-ready) + EPUB (Kindle)

BOOK = buch-mannheim
TEX  = $(BOOK).tex
PDF  = $(BOOK).pdf
EPUB = $(BOOK).epub

# --- PDF (XeLaTeX — für Fonts und Farben) ---
pdf:
	xelatex $(TEX)
	xelatex $(TEX)
	@echo "PDF fertig: $(PDF)"

# --- EPUB (via Pandoc) ---
epub:
	pandoc $(TEX) \
	  -o $(EPUB) \
	  --toc \
	  --epub-cover-image=../images/cover.png \
	  --metadata title="Deutsch lernen in Mannheim" \
	  --metadata author="German Cards Ukraine" \
	  --metadata lang=de
	@echo "EPUB fertig: $(EPUB)"

# --- Alles zusammen ---
all: pdf epub

# --- Aufräumen ---
clean:
	rm -f *.aux *.log *.out *.toc *.lof *.lot *.synctex.gz

.PHONY: pdf epub all clean
