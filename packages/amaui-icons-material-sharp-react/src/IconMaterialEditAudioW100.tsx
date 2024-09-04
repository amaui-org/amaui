import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditAudioW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditAudioW100'

      short_name='EditAudio'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M250-132 132-249l118-117 20 19-85 84h588l-84-84 20-19 119 117-119 117-20-19 85-84H186l84 84-20 19Zm216-327v-404h28v404h-28Zm-147-75v-254h28v254h-28Zm294 0v-254h28v254h-28Zm-441-94v-64h28v64h-28Zm588 0v-64h28v64h-28Z"/>
    </Icon>
  );
});

IconMaterialEditAudioW100.displayName = 'AmauiIconMaterialEditAudioW100';

export default IconMaterialEditAudioW100;
