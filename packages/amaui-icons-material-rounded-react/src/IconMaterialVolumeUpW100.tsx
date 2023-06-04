import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVolumeUpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeUpW100'

      short_name='VolumeUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.6 18.925q-.175.075-.337-.038-.163-.112-.163-.312 0-.1.063-.162.062-.063.137-.113 1.95-.8 3.125-2.513 1.175-1.712 1.175-3.812 0-2.1-1.175-3.813Q16.25 6.45 14.3 5.65q-.1-.05-.15-.125-.05-.075-.05-.175 0-.2.163-.3.162-.1.337-.025 2.1.925 3.4 2.787 1.3 1.863 1.3 4.163 0 2.3-1.3 4.162-1.3 1.863-3.4 2.788ZM5.45 13.7q-.325 0-.538-.213-.212-.212-.212-.537v-1.9q0-.325.212-.538.213-.212.538-.212h2.5l1.875-1.875q.35-.35.813-.163.462.188.462.688v6.1q0 .5-.462.687-.463.188-.813-.162L7.95 13.7Zm8.65 1.4V8.85q.725.525 1.113 1.362.387.838.387 1.788 0 .95-.387 1.762-.388.813-1.113 1.338Zm-3.7-6.25L8.25 11H5.4v2h2.85l2.15 2.15ZM7.9 12Z"/>
    </Icon>
  );
});

IconMaterialVolumeUpW100.displayName = 'AmauiIconMaterialVolumeUpW100';

export default IconMaterialVolumeUpW100;
