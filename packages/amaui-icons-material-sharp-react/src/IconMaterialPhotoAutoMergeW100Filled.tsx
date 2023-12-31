import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhotoAutoMergeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoAutoMergeW100Filled'

      short_name='PhotoAutoMerge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m194-116-64-496 82-8v408h522l3 27-543 69Zm98-176v-536h302q-8 15-12 31t-4 33q0 23 7 47t19 45q-10-6-21.5-9t-22.5-3q-39 0-66.5 27.5T466-590q0 39 27.5 66.5T560-496q39 0 66.5-27.5T654-590q0-8-2-16l-4-16q23 19 51 28t57 9q19 0 37-3.5t35-11.5v308H292Zm58-28h420q-42-44-96-68t-114-24q-60 0-114 24t-96 68Zm336-363 55-154h31l55 154h-27l-12-32h-64l-10 32h-28Zm46-54h49l-25-78-24 78Z"/>
    </Icon>
  );
});

IconMaterialPhotoAutoMergeW100Filled.displayName = 'AmauiIconMaterialPhotoAutoMergeW100Filled';

export default IconMaterialPhotoAutoMergeW100Filled;
