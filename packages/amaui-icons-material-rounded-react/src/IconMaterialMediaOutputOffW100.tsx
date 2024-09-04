import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMediaOutputOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MediaOutputOffW100'

      short_name='MediaOutputOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M366-548Zm106 416q-24.75 0-42.37-17.63Q412-167.25 412-192v-156q0-41.39 14-76.7 14-35.3 40-63.3l20 20q-21.7 23.88-33.85 54.44Q440-383 440-348v48h38q12.75 0 21.38 8.62Q508-282.75 508-270v108q0 12.75-8.62 21.37Q490.75-132 478-132h-6Zm-160-80H192q-24.75 0-42.37-17.63Q132-247.25 132-272v-522h28v522q0 14 9 23t23 9h120v28Zm240-302-22-22q20.1-9.57 42.82-14.78Q595.53-556 620-556q86.67 0 147.33 60.67Q828-434.67 828-348v110l-28-28v-82q0-75-52.5-127.5T620-528q-18.14 0-35.07 3.5T552-514ZM312-305q-39-11-64.5-43.5T222-424q0-51.37 36.31-87.69Q294.63-548 346-548q9.5 0 18.25 1.5T381-543q-4.67 5.94-8.83 12.47Q368-524 363-518q-5-1-8.5-1.5t-8.5-.5q-40 0-68 28t-28 68q0 31 17.5 55t44.5 35v29Zm-46-495-28-28h262q24.75 0 42.38 17.62Q560-792.75 560-768v118q-7 2-14.12 3.45-7.12 1.44-13.88 3.55v-125q0-14-9-23t-23-9H266Zm162 95Zm364 583L108-806q-4-4-4.5-9.5T108-826q5-5 10-5t10 5l684 684q4 4 4.5 9.5T812-122q-5 5-10 5t-10-5Z"/>
    </Icon>
  );
});

IconMaterialMediaOutputOffW100.displayName = 'AmauiIconMaterialMediaOutputOffW100';

export default IconMaterialMediaOutputOffW100;
