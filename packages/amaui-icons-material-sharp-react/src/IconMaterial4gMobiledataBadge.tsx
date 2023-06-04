import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial4gMobiledataBadge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='4gMobiledataBadge'

      short_name='4gMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M520 776h280V536H660v80h60v80H600V456h200v-80H520v400Zm-200 0h80V656h80v-80h-80V376h-80v200h-80V376h-80v280h160v120ZM40 936V216h880v720H40Zm80-80h720V296H120v560Zm0 0V296v560Z"/>
    </Icon>
  );
});

IconMaterial4gMobiledataBadge.displayName = 'AmauiIconMaterial4gMobiledataBadge';

export default IconMaterial4gMobiledataBadge;
