import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSerifW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SerifW100'

      short_name='Serif'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M248-240h114v-13h-61l54-147h169l53 147h-58v13h145v-13h-31L461-720h-10L280-253h-32v13Zm112-175 80-220 79 220H360ZM132-132v-696h696v696H132Zm28-28h640v-640H160v640Zm0 0v-640 640Z"/>
    </Icon>
  );
});

IconMaterialSerifW100.displayName = 'AmauiIconMaterialSerifW100';

export default IconMaterialSerifW100;
