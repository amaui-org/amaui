import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmbShare = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmbShare'

      short_name='SmbShare'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M485 616h163q26 0 44-18t18-44q0-26-18-44.5T648 491h-2q-5-32-29-53.5T560 416q-26 0-47 13.5T481 466q-30 2-50.5 23.5T410 541q0 30 21.5 52.5T485 616ZM40 936V336h80v520h680v80H40Zm160-160V176h280l80 80h360v520H200Zm80-80h560V336H527l-80-80H280v440Zm0 0V256v440Z"/>
    </Icon>
  );
});

IconMaterialSmbShare.displayName = 'AmauiIconMaterialSmbShare';

export default IconMaterialSmbShare;
