import React from 'react';
import TextInput from '../common/TextInput';

const ArtistForm = ({ artist, onSave, onChange, saving, errors }) => {
  return (
    <form>
      <h1>Manage Artists</h1>
      <TextInput
        name="Name"
        label="Name"
        value={artist.Name}
        onChange={onChange}
        error={errors.Name} />

      <TextInput
        name="Country"
        label="Country"
        value={artist.Country}
        onChange={onChange}
        error={errors.Country} />

      <TextInput
        name="Year"
        label="Year"
        value={artist.Year}
        onChange={onChange}
        error={errors.Year} />

      <input
        type="submit"
        disabled={saving}
        value="Save"
        className="btn btn-primary"
        onClick={onSave} />
    </form>
  );
};

ArtistForm.propTypes = {
  artist: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default ArtistForm;
