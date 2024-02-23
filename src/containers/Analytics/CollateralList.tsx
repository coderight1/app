import { useState } from 'react'

import { useCollateralInfo, useCollateralStats, useMediaQuery } from '~/hooks'

import { NavContainer } from '~/components/NavContainer'
import { SortByDropdown } from '~/components/SortByDropdown'
import { CollateralTable } from './CollateralTable'
import { CollateralStatsTable } from './CollateralStatsTable'

export function CollateralList() {
    const collateralInfo = useCollateralInfo()
    const collateralStats = useCollateralStats()

    const [tab, setTab] = useState(0)

    const content = [
        {
            sortingProps: {
                headers: collateralInfo.headers,
                sorting: collateralInfo.sorting,
                setSorting: collateralInfo.setSorting,
            },
            table: (
                <CollateralTable
                    headers={collateralInfo.headers}
                    rows={collateralInfo.rows}
                    sorting={collateralInfo.sorting}
                    setSorting={collateralInfo.setSorting}
                />
            ),
        },
        {
            sortingProps: {
                headers: collateralStats.headers,
                sorting: collateralStats.sorting,
                setSorting: collateralStats.setSorting,
            },
            table: (
                <CollateralStatsTable
                    headers={collateralStats.headers}
                    rows={collateralStats.rows}
                    sorting={collateralStats.sorting}
                    setSorting={collateralStats.setSorting}
                />
            ),
        },
    ][tab]

    const isLargerThanSmall = useMediaQuery('upToSmall')

    return (
        <NavContainer
            navItems={[`Collaterals`, `System Stats`]}
            selected={tab}
            onSelect={setTab}
            headerContent={!isLargerThanSmall && <SortByDropdown {...content.sortingProps} />}
        >
            {content.table}
        </NavContainer>
    )
}
