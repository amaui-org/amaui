import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMaskedTransitionsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MaskedTransitionsW100'

      short_name='MaskedTransitions'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M380-152q-95 0-161.5-66.5T152-380q0-95 66.5-161.5T380-608q95 0 161.5 66.5T608-380q0 95-66.5 161.5T380-152Zm0-28q83 0 141.5-58.5T580-380q0-83-58.5-141.5T380-580q-83 0-141.5 58.5T180-380q0 83 58.5 141.5T380-180Zm288-190v-10q0-119-84.5-203.5T380-668h-10q18-50 73.5-95T580-808q95 0 161.5 66.5T808-580q0 81-45 136.5T668-370Z"/>
    </Icon>
  );
});

IconMaterialMaskedTransitionsW100.displayName = 'AmauiIconMaterialMaskedTransitionsW100';

export default IconMaterialMaskedTransitionsW100;
