import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHelicopterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HelicopterW100'

      short_name='Helicopter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M416-416v-256q-120 0-188 78t-68 178h256Zm128 128v-384H444v284H160v100h384Zm28-126 228-24v-94H572v118Zm-65 242H172v-28h335v28Zm65-88H132v-156q0-112 76.5-198T416-700h156v140h194l34-80h28v227l-256 27v126Zm175-500H172v-28h575v28ZM572-414v-118 118Zm-28 126Z"/>
    </Icon>
  );
});

IconMaterialHelicopterW100.displayName = 'AmauiIconMaterialHelicopterW100';

export default IconMaterialHelicopterW100;
