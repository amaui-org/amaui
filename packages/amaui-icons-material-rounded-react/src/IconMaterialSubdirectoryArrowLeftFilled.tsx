import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSubdirectoryArrowLeftFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubdirectoryArrowLeftFilled'

      short_name='SubdirectoryArrowLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.3 20.275 4.7 15.7q-.15-.15-.213-.325-.062-.175-.062-.375t.062-.375q.063-.175.213-.325l4.625-4.625q.275-.275.7-.288.425-.012.7.288.3.275.3.7 0 .425-.3.725l-2.9 2.9H17V5q0-.425.288-.713Q17.575 4 18 4t.712.287Q19 4.575 19 5v10q0 .425-.288.712Q18.425 16 18 16H7.825l2.9 2.875q.275.275.287.687.013.413-.287.713t-.712.3q-.413 0-.713-.3Z"/>
    </Icon>
  );
});

IconMaterialSubdirectoryArrowLeftFilled.displayName = 'AmauiIconMaterialSubdirectoryArrowLeftFilled';

export default IconMaterialSubdirectoryArrowLeftFilled;
