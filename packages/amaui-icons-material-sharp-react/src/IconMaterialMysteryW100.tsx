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
      <path d="M440-240q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Zm0 144q-77 0-136.5-39T217-520q27-65 86.5-104.5T440-664q76 0 135.5 39.5T662-520q-27 66-86.5 105T440-376Zm0-28q60 0 111-31t81-85q-30-54-81-85t-111-31q-60 0-111.5 31T247-520q30 54 81.5 85T440-404Zm0-56q25 0 42.5-17.5T500-520q0-25-17.5-42.5T440-580q-25 0-42.5 17.5T380-520q0 25 17.5 42.5T440-460Zm0 248q-64 0-120-24t-98-66q-42-42-66-98t-24-120q0-64 24-120t66-98q42-42 98-66t120-24q64 0 120 24t98 66q42 42 66 98t24 120q0 60-21.5 113T667-312l161 161-19 19-161-161q-42 38-95 59.5T440-212Z"/>
    </Icon>
  );
});

IconMaterialMysteryW100.displayName = 'AmauiIconMaterialMysteryW100';

export default IconMaterialMysteryW100;
