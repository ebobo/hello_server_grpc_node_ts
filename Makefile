
all: clean buf

clean:
	@echo "*** $@"
	rm -rf ${OUT_DIR}

# Output directory for generated files
OUT_DIR=lib


# Generate the protobuf files use buf
buf:
	@echo "*** $@"
	@mkdir -p ${OUT_DIR}
	npx buf generate proto




