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
      <path d="m724-715-7 23q-2 4-4.5 6.5T705-683q-7 0-11-5.5t-2-12.5l46-126q2-5 5-7.5t8-2.5h11q5 0 8 2.5t5 7.5l46 127q2 6-1.5 11.5T809-683q-4 0-7-2t-5-6l-9-24h-64Zm8-22h49l-25-78-24 78ZM253-124q-25 4-44.5-11.5T186-176l-48-374q-4-25 11.5-45t41.5-23l21-2v318q0 38 26 64t64 26h432q2 11-5.5 20T710-182l-457 58Zm99-168q-25 0-42.5-17.5T292-352v-416q0-25 17.5-42.5T352-828h242q-8 15-12 31t-4 33q0 23 7 47t19 45q-10-6-21.5-9t-22.5-3q-39 0-66.5 27.5T466-590q0 39 27.5 66.5T560-496q39 0 66.5-27.5T654-590q0-8-2-16l-4-16q23 19 51 28t57 9q19 0 37-3.5t35-11.5v248q0 25-17.5 42.5T768-292H352Zm-2-28h420q-42-44-96-68t-114-24q-60 0-114 24t-96 68Zm382-417h49l-25-78-24 78Z"/>
    </Icon>
  );
});

IconMaterialPhotoAutoMergeW100Filled.displayName = 'AmauiIconMaterialPhotoAutoMergeW100Filled';

export default IconMaterialPhotoAutoMergeW100Filled;
