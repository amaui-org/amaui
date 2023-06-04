import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEqualizerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EqualizerW100'

      short_name='Equalizer'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 19.35q-.575 0-.962-.388-.388-.387-.388-.962v-4q0-.575.388-.963.387-.387.962-.387t.963.387q.387.388.387.963v4q0 .575-.387.962-.388.388-.963.388Zm6 0q-.575 0-.962-.388-.388-.387-.388-.962V6q0-.575.388-.963.387-.387.962-.387t.963.387q.387.388.387.963v12q0 .575-.387.962-.388.388-.963.388Zm6 0q-.575 0-.962-.388-.388-.387-.388-.962v-7q0-.575.388-.963.387-.387.962-.387t.962.387q.388.388.388.963v7q0 .575-.388.962-.387.388-.962.388Z"/>
    </Icon>
  );
});

IconMaterialEqualizerW100.displayName = 'AmauiIconMaterialEqualizerW100';

export default IconMaterialEqualizerW100;
