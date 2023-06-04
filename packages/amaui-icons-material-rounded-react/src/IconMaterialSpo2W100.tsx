import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpo2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Spo2W100'

      short_name='Spo2'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M510 844q-11 0-19.5-8.5T482 816V664q0-11 8.5-19.5T510 636h92q11 0 19.5 8.5T630 664v152q0 11-8.5 19.5T602 844h-92Zm0-28h92V664h-92v152Zm316 144H718q-11.9 0-19.95-8.05Q690 943.9 690 932v-62q0-11.9 8.05-19.95Q706.1 842 718 842h94v-62H704q-6.067 0-10.033-3.953-3.967-3.954-3.967-10Q690 760 693.967 756q3.966-4 10.033-4h108q11.9 0 19.95 8.05Q840 768.1 840 780v62q0 11.9-8.05 19.95Q823.9 870 812 870h-94v62h108q6.067 0 10.033 3.953 3.967 3.954 3.967 10Q840 952 836.033 956q-3.966 4-10.033 4Zm-444-37q-109-7-179.5-85T132 648q0-54 25.5-108t63-104.5Q258 385 301 341t79.08-77.682Q385 259 390 257t10-2q5 0 10.474 2 5.473 2 10.526 6 30 28 62 60t61 66.5q29 34.5 54 71.5t43 75h-30q-28-56-80.5-119.5T400 282Q281 391 220.5 483T160 648q0 102 62 171t160 76v28Zm4-275Z"/>
    </Icon>
  );
});

IconMaterialSpo2W100.displayName = 'AmauiIconMaterialSpo2W100';

export default IconMaterialSpo2W100;
