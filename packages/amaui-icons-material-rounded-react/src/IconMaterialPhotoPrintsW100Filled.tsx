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
      <path d="M220-136q-11.333 2-19.667-5Q192-148 190-160l-56-440q-2-11.333 5-19.667Q146-628 158-630l54-6v300q0 45 31.5 76.5T320-228h414q2 11-5 19.5T710-198l-490 62Zm100-172q-11.9 0-19.95-8.05Q292-324.1 292-336v-480q0-11.9 8.05-19.95Q308.1-844 320-844h480q11.9 0 19.95 8.05Q828-827.9 828-816v480q0 11.9-8.05 19.95Q811.9-308 800-308H320Zm240-88q-3-66-51.5-113T392-556q5 66 52.5 113T560-396Zm0-120q17 0 28.5-11.5T600-556v-10l10 4q15 6 30.5 3t23.5-17q9-15 6-32t-20-24l-10-4 10-4q17-7 20-24t-6-32q-8-14-22.5-17.5T610-710l-10 4v-10q0-17-11.5-28.5T560-756q-17 0-28.5 11.5T520-716v10l-10-4q-17-7-31.5-3.5T456-696q-9 15-6 32.193 3 17.193 20 24.07l10 3.93-10 3.93Q453-625 450-608t6 32q8 14 23.5 17t30.5-3l10-4v10q0 17 11.5 28.5T560-516Zm0-80q-17 0-28.5-11.5T520-636q0-17 11.5-28.5T560-676q17 0 28.5 11.5T600-636q0 17-11.5 28.5T560-596Zm0 200q68 0 115.5-47T728-556q-68 0-116.5 47T560-396Z"/>
    </Icon>
  );
});

IconMaterialPhotoPrintsW100Filled.displayName = 'AmauiIconMaterialPhotoPrintsW100Filled';

export default IconMaterialPhotoPrintsW100Filled;
