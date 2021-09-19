# Copyright (c) 2021  Teddy Wing
#
# This file is part of Legibility.
#
# Legibility is free software: you can redistribute it and/or modify it
# under the terms of the GNU General Public License as published by the
# Free Software Foundation, either version 3 of the License, or (at
# your option) any later version.
#
# Legibility is distributed in the hope that it will be useful, but
# WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
# General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with Legibility. If not, see <https://www.gnu.org/licenses/>.


.PHONY: chrome
chrome:
	perl -i -0777 -pe 's/,\n\n\t"commands".*\t}//ms' manifest.json