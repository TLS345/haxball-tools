	#!/bin/bash

USER="TLS345"  # tu usuario de GitHub

for i in {1..60}
do
    REPO="haxball-tools-$i"
    URL="https://github.com/$USER/$REPO.git"

    echo "==========================================="
    echo " Agregando repo: $REPO"
    echo " URL: $URL"
    echo "==========================================="

    git remote add $REPO $URL
    git fetch $REPO

    # Si tus repos usan MAIN:
    git subtree add --prefix=$REPO $REPO main --squash

    # Si alguno llega a usar master, cambiá main por master:
    # git subtree add --prefix=$REPO $REPO master --squash

    echo ""
done

echo "==========================================="
echo "   TODOS LOS REPOS FUERON UNIFICADOS"
echo "==========================================="
