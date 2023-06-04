import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVolumeDownAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeDownAltW100'

      short_name='VolumeDownAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.05 13.7q-.325 0-.537-.213-.213-.212-.213-.537v-1.9q0-.325.213-.538.212-.212.537-.212h2.5l1.875-1.875q.35-.35.813-.163.462.188.462.688v6.1q0 .5-.462.687-.463.188-.813-.162L9.55 13.7Zm8.65 1.4V8.85q.725.525 1.112 1.362.388.838.388 1.788 0 .95-.388 1.762-.387.813-1.112 1.338ZM12 8.85 9.85 11H7v2h2.85L12 15.15ZM9.5 12Z"/>
    </Icon>
  );
});

IconMaterialVolumeDownAltW100.displayName = 'AmauiIconMaterialVolumeDownAltW100';

export default IconMaterialVolumeDownAltW100;
