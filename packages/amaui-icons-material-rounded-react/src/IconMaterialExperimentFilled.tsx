import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExperimentFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExperimentFilled'

      short_name='Experiment'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-51 0-72.5-45.5T138-250l222-270v-240h-40q-17 0-28.5-11.5T280-800q0-17 11.5-28.5T320-840h320q17 0 28.5 11.5T680-800q0 17-11.5 28.5T640-760h-40v240l222 270q32 39 10.5 84.5T760-120H200Zm80-120h400L544-400H416L280-240Z"/>
    </Icon>
  );
});

IconMaterialExperimentFilled.displayName = 'AmauiIconMaterialExperimentFilled';

export default IconMaterialExperimentFilled;
