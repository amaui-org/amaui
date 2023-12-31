import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMistW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MistW100'

      short_name='Mist'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M146-226v-28h428v28H146Zm560 0v-28h108v28H706ZM146-386v-28h108v28H146Zm240 0v-28h428v28H386ZM146-546v-28h468v28H146Zm600 0v-28h68v28h-68ZM146-706v-28h228v28H146Zm360 0v-28h308v28H506Z"/>
    </Icon>
  );
});

IconMaterialMistW100.displayName = 'AmauiIconMaterialMistW100';

export default IconMaterialMistW100;
