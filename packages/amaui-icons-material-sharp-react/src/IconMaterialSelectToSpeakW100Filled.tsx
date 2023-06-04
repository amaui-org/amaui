import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSelectToSpeakW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelectToSpeakW100Filled'

      short_name='SelectToSpeak'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M564 861v-30q81-30 130.5-100T744 575q0-86-49.5-156T564 319v-30q92 33 150 111t58 175q0 97-58 175T564 861Zm-120-91L318 644H188V508h130l126-126v388Zm120-70V450q30 22 45 55.5t15 70.5q0 37-15.5 69.5T564 700ZM92 376V188h188v28H120v160H92Zm588 588v-28h160V776h28v188H680Z"/>
    </Icon>
  );
});

IconMaterialSelectToSpeakW100Filled.displayName = 'AmauiIconMaterialSelectToSpeakW100Filled';

export default IconMaterialSelectToSpeakW100Filled;
