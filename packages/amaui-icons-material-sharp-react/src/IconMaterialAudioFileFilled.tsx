import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAudioFileFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AudioFileFilled'

      short_name='AudioFile'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.75 19q.95 0 1.6-.65.65-.65.65-1.6V13h3v-2h-4v3.875q-.275-.2-.587-.288-.313-.087-.663-.087-.95 0-1.6.65-.65.65-.65 1.6 0 .95.65 1.6.65.65 1.6.65ZM4 22V2h10l6 6v14Zm9-13h5l-5-5Z"/>
    </Icon>
  );
});

IconMaterialAudioFileFilled.displayName = 'AmauiIconMaterialAudioFileFilled';

export default IconMaterialAudioFileFilled;
