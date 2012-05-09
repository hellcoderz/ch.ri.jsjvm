

JSFILES := $(wildcard src/main/javascript/*)
TARGETDIR := target
OUTPUTJS := $(TARGETDIR)/jsjvm.js

all:	jsjvm

jsjvm:	$(TARGETDIR)
	cat $(JSFILES) > $(OUTPUTJS)

$(TARGETDIR):
	mkdir $@

info:
	@echo "JSFILES: $(JSFILES)"