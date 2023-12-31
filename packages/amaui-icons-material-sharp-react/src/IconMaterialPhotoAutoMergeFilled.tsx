import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhotoAutoMergeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoAutoMergeFilled'

      short_name='PhotoAutoMerge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M145-71 70-666l130-16v482h530l7 56-592 73Zm135-209v-600h315q-8 20-11.5 40t-3.5 41q0 15 1.5 30t6.5 29h-8q-46 0-78 32.5T470-630q0 46 32 78t78 32q40 0 70-25t38-65q26 15 54 23t57 8q20 0 40.5-4t40.5-12v315H280Zm80-80h440v-32q-45-42-102-65t-118-23q-62 0-118.5 23T360-392v32Zm347-340 71-200h44l72 200h-43l-15-44h-72l-15 44h-42Zm67-74h52l-26-82-26 82Z"/>
    </Icon>
  );
});

IconMaterialPhotoAutoMergeFilled.displayName = 'AmauiIconMaterialPhotoAutoMergeFilled';

export default IconMaterialPhotoAutoMergeFilled;
