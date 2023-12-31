import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMediaOutputOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MediaOutputOffW100Filled'

      short_name='MediaOutputOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M412-132v-216q0-41 14-76.5t40-63.5l20 20q-22 24-34 54.5T440-348v48h68v168h-96Zm416-106-28-28v-82q0-75-52.5-127.5T620-528q-18 0-35 3.5T552-514l-22-22q20-10 43-15t47-5q87 0 147.5 60.5T828-348v110Zm-516-96q-27-11-44.5-35T250-424q0-40 28-68t68-28q5 0 8.5.5t8.5 1.5q-24 37-37.5 79.5T312-348v14Zm145-275L238-828h322v178q-28 5-54 16t-49 25ZM132-212v-573h37l226 226q-4 4-7.5 8t-6.5 8q-8-2-17-3.5t-18-1.5q-51 0-87.5 36.5T222-424q0 43 25.5 75.5T312-305v93H132Zm670 100L98-816l20-20 704 704-20 20Z"/>
    </Icon>
  );
});

IconMaterialMediaOutputOffW100Filled.displayName = 'AmauiIconMaterialMediaOutputOffW100Filled';

export default IconMaterialMediaOutputOffW100Filled;
