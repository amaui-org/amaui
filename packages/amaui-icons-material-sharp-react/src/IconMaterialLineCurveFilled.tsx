import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineCurveFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineCurveFilled'

      short_name='LineCurve'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M720 896q0-116-44-218T556 500q-76-76-178-120t-218-44v-80q132 0 248.5 50.5T612 444q87 87 137.5 203.5T800 896h-80Z"/>
    </Icon>
  );
});

IconMaterialLineCurveFilled.displayName = 'AmauiIconMaterialLineCurveFilled';

export default IconMaterialLineCurveFilled;
