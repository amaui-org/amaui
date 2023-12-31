import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMysteryW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MysteryW100'

      short_name='Mystery'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-240q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Zm0 144q-68 0-125-35t-90-94q-4-7-4-15t4-15q33-59 90.5-94T440-664q67 0 124 35t90 94q4 7 4 15t-4 15q-33 59-90 94t-124 35Zm0-28q60 0 111-31t81-85q-30-54-81-85t-111-31q-60 0-111.5 31T247-520q30 54 81.5 85T440-404Zm0-56q25 0 42.5-17.5T500-520q0-25-17.5-42.5T440-580q-25 0-42.5 17.5T380-520q0 25 17.5 42.5T440-460Zm0 248q-64 0-120-24t-98-66q-42-42-66-98t-24-120q0-64 24-120t66-98q42-42 98-66t120-24q64 0 120 24t98 66q42 42 66 98t24 120q0 60-21.5 113T667-312l152 152q4 4 3.5 9t-4.5 9q-4 4-9.5 4t-9.5-4L648-293q-42 38-95 59.5T440-212Z"/>
    </Icon>
  );
});

IconMaterialMysteryW100.displayName = 'AmauiIconMaterialMysteryW100';

export default IconMaterialMysteryW100;
