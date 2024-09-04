import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRotateAutoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RotateAutoW100'

      short_name='RotateAuto'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M332-320h30l44-108h150l44 108h32L488-680h-14L332-320Zm84-134 62-164h4l64 164H416Zm64.17 322Q408-132 345-159q-63-27-110.37-73.79-47.37-46.79-75-110.04Q132-406.08 132-478h28q0 66 25.5 124t69 101.5Q298-209 356.18-184q58.18 25 123.82 25 134 0 227-93t93-227q0-134-93-227t-227-93q-100 0-178.5 53.5T186-606h116v28H132v-170h28v131q40-94 125.5-152.5T480-828q72.21 0 135.72 27.39 63.51 27.39 110.49 74.35 46.98 46.96 74.38 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialRotateAutoW100.displayName = 'AmauiIconMaterialRotateAutoW100';

export default IconMaterialRotateAutoW100;
