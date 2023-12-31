import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhotoPrintsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoPrintsW100Filled'

      short_name='PhotoPrints'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m193-133-62-494 81-9v408h522l3 27-544 68Zm99-175v-536h536v536H292Zm268-88q68 0 115.5-47T728-556q-68 0-116.5 47T560-396Zm0 0q-3-66-51.5-113T392-556q5 66 52.5 113T560-396Zm0-120q17 0 28.5-11.5T600-556v-10l10 4q15 6 30.5 3t23.5-17q9-15 6-32t-20-24l-10-4 10-4q17-7 20-24t-6-32q-8-14-22.5-17.5T610-710l-10 4v-10q0-17-11.5-28.5T560-756q-17 0-28.5 11.5T520-716v10l-10-4q-17-7-31.5-3.5T456-696q-9 15-6 32.193 3 17.193 20 24.07l10 3.93-10 3.93Q453-625 450-608t6 32q8 14 23.5 17t30.5-3l10-4v10q0 17 11.5 28.5T560-516Zm0-80q-17 0-28.5-11.5T520-636q0-17 11.5-28.5T560-676q17 0 28.5 11.5T600-636q0 17-11.5 28.5T560-596Z"/>
    </Icon>
  );
});

IconMaterialPhotoPrintsW100Filled.displayName = 'AmauiIconMaterialPhotoPrintsW100Filled';

export default IconMaterialPhotoPrintsW100Filled;
